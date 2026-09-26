#!/usr/bin/env python3
"""
HR Professional Services — Master Google Drive Batch Synchronizer
Uploads all local Phase 3 master documentation into their canonical
Google Drive folders under 'HR - Services' (1YmEJ3MhozQ5yVNKIKq4YwUaCKQa0Fb3l).
"""

import os
import sys
import json
import ssl
import urllib.request
import urllib.parse
from drive_sync import get_access_token, get_ssl_context, MASTER_ROOT_ID

PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

# Canonical Mapping from local directories to Google Drive folder names
FOLDER_MAPPING = {
    "00-MASTER-CONTROL": "00 - MASTER CONTROL",
    "01-BUSINESS-STRATEGY": "01 - CONSULTING",
    "02-SERVICES": "02 - WEBSITE SERVICES",
    "03-WEBSITE": "17 - WEBSITE & SEO",
    "04-DIGITAL-PRODUCTS": "10 - CODE & AUTOMATION KITS",
    "05-FREE-RESOURCES": "12 - FREE RESOURCES",
    "06-BUSINESS-SYSTEMS": "18 - BUSINESS OPERATIONS",
    "07-AUTOMATION": "03 - BUSINESS AUTOMATION",
    "08-GOOGLE-WORKSPACE": "00 - MASTER CONTROL",
    "09-STRIPE-COMMERCE": "15 - FINANCE & ACCOUNTING",
    "10-CLIENT-OPERATIONS": "13 - CLIENT MANAGEMENT",
    "11-TRADING-TECHNOLOGY": "06 - TRADING TECHNOLOGY",
    "12-MARKETING": "16 - MARKETING",
    "13-SEO": "17 - WEBSITE & SEO",
    "14-DOCUMENTATION": "00 - MASTER CONTROL",
    "15-TRAINING": "09 - TRAINING",
    "16-TEMPLATES": "07 - TEMPLATES",
    "17-WORKING-FILES": "18 - BUSINESS OPERATIONS",
    "18-ANALYTICS": "18 - BUSINESS OPERATIONS",
    "19-LEGAL-POLICIES": "00 - MASTER CONTROL",
    "99-ARCHIVE": "99 - ARCHIVE"
}

def get_drive_folders(token, ctx):
    """Retrieve all direct subfolders inside HR - Services."""
    q = urllib.parse.quote(f"'{MASTER_ROOT_ID}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false")
    url = f"https://www.googleapis.com/drive/v3/files?q={q}&fields=files(id,name)&pageSize=100"
    req = urllib.request.Request(url, headers={"Authorization": f"Bearer {token}"})
    with urllib.request.urlopen(req, context=ctx) as resp:
        data = json.loads(resp.read().decode())
        folders = {f["name"].strip(): f["id"] for f in data.get("files", [])}
        return folders

def get_or_create_subfolder(token, ctx, parent_id, folder_name):
    """Finds or creates a subfolder within a parent folder."""
    safe_name = folder_name.replace("'", "\\'")
    q = urllib.parse.quote(f"'{parent_id}' in parents and name = '{safe_name}' and mimeType = 'application/vnd.google-apps.folder' and trashed = false")
    url = f"https://www.googleapis.com/drive/v3/files?q={q}&fields=files(id,name)&pageSize=10"
    req = urllib.request.Request(url, headers={"Authorization": f"Bearer {token}"})
    with urllib.request.urlopen(req, context=ctx) as resp:
        res = json.loads(resp.read().decode())
        existing = res.get("files", [])
        if existing:
            return existing[0]["id"]

    # Create subfolder
    create_url = "https://www.googleapis.com/drive/v3/files"
    meta = {
        "name": folder_name,
        "mimeType": "application/vnd.google-apps.folder",
        "parents": [parent_id]
    }
    payload = json.dumps(meta).encode("utf-8")
    c_req = urllib.request.Request(create_url, data=payload, headers={
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json"
    })
    with urllib.request.urlopen(c_req, context=ctx) as c_resp:
        return json.loads(c_resp.read().decode())["id"]

def upload_file_to_drive(token, ctx, parent_id, filename, file_path):
    """Uploads or updates a file inside a Drive folder."""
    with open(file_path, "rb") as f:
        file_bytes = f.read()

    safe_name = filename.replace("'", "\\'")
    q = urllib.parse.quote(f"'{parent_id}' in parents and name = '{safe_name}' and trashed = false")
    search_url = f"https://www.googleapis.com/drive/v3/files?q={q}&fields=files(id,name)&pageSize=1"
    s_req = urllib.request.Request(search_url, headers={"Authorization": f"Bearer {token}"})
    
    file_id = None
    with urllib.request.urlopen(s_req, context=ctx) as s_resp:
        existing = json.loads(s_resp.read().decode()).get("files", [])
        if existing:
            file_id = existing[0]["id"]

    boundary = "-------314159265358979323846"
    delimiter = f"\r\n--{boundary}\r\n"
    close_delim = f"\r\n--{boundary}--"

    mime_type = "text/markdown; charset=UTF-8" if filename.endswith(".md") else "text/plain; charset=UTF-8"

    if file_id:
        # Update existing file
        meta = {"name": filename}
        meta_payload = json.dumps(meta)
        body = (
            delimiter +
            "Content-Type: application/json; charset=UTF-8\r\n\r\n" +
            meta_payload +
            delimiter +
            f"Content-Type: {mime_type}\r\n\r\n"
        ).encode("utf-8") + file_bytes + close_delim.encode("utf-8")

        upload_url = f"https://www.googleapis.com/upload/drive/v3/files/{file_id}?uploadType=multipart"
        req = urllib.request.Request(upload_url, data=body, headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": f"multipart/related; boundary={boundary}"
        }, method="PATCH")
        with urllib.request.urlopen(req, context=ctx) as resp:
            return json.loads(resp.read().decode())["id"], "UPDATED"
    else:
        # Create new file
        meta = {
            "name": filename,
            "parents": [parent_id]
        }
        meta_payload = json.dumps(meta)
        body = (
            delimiter +
            "Content-Type: application/json; charset=UTF-8\r\n\r\n" +
            meta_payload +
            delimiter +
            f"Content-Type: {mime_type}\r\n\r\n"
        ).encode("utf-8") + file_bytes + close_delim.encode("utf-8")

        upload_url = "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart"
        req = urllib.request.Request(upload_url, data=body, headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": f"multipart/related; boundary={boundary}"
        }, method="POST")
        with urllib.request.urlopen(req, context=ctx) as resp:
            return json.loads(resp.read().decode())["id"], "CREATED"

def main():
    token, email = get_access_token()
    ctx = get_ssl_context()
    print(f"[*] Starting Batch Upload with Service Account: {email}")
    
    drive_folders = get_drive_folders(token, ctx)
    print(f"[*] Discovered {len(drive_folders)} master folders in Google Drive.")

    uploaded_count = 0
    updated_count = 0
    errors = []

    for local_dir, drive_folder_name in FOLDER_MAPPING.items():
        local_path = os.path.join(PROJECT_ROOT, local_dir)
        if not os.path.isdir(local_path):
            continue

        target_folder_id = drive_folders.get(drive_folder_name)
        if not target_folder_id:
            print(f"[!] Warning: Target Drive folder '{drive_folder_name}' not found. Skipping {local_dir}.")
            continue

        print(f"\n📂 Syncing [{local_dir}] → 📁 Drive: [{drive_folder_name}] (ID: {target_folder_id})")

        # Walk local files
        for root, dirs, files in os.walk(local_path):
            for file in sorted(files):
                if file.startswith(".") or not file.endswith((".md", ".txt", ".json", ".csv")):
                    continue
                file_full_path = os.path.join(root, file)
                rel_dir = os.path.relpath(root, local_path)

                # Determine target folder (support subdirectories like WEB-001-Landing-Page)
                dest_id = target_folder_id
                if rel_dir != ".":
                    # Subfolder required
                    subfolder_name = rel_dir.replace("/", " - ")
                    dest_id = get_or_create_subfolder(token, ctx, target_folder_id, subfolder_name)

                try:
                    f_id, status = upload_file_to_drive(token, ctx, dest_id, file, file_full_path)
                    print(f"   [✓] {status}: {file} -> ID: {f_id}")
                    if status == "CREATED":
                        uploaded_count += 1
                    else:
                        updated_count += 1
                except Exception as ex:
                    print(f"   [X] Failed: {file}: {ex}")
                    errors.append((file, str(ex)))

    print("\n========================================================")
    print(f"🎉 GOOGLE DRIVE BATCH SYNC COMPLETED!")
    print(f"   - Files Created: {uploaded_count}")
    print(f"   - Files Updated: {updated_count}")
    print(f"   - Errors: {len(errors)}")
    print("========================================================")

if __name__ == "__main__":
    main()
