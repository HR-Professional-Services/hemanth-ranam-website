#!/usr/bin/env python3
"""
HR Professional Services — Google Drive Sync & Diagnostic Tool
Uses the Service Account credentials (drive-key.json) to inspect
and synchronize folders and documents with Google Drive.
"""

import sys
import os
import json
import ssl
import urllib.request
from google.oauth2 import service_account
from google.auth.transport.requests import Request

KEY_FILE = os.path.join(os.path.dirname(__file__), "..", "drive-key.json")
MASTER_ROOT_ID = "1YmEJ3MhozQ5yVNKIKq4YwUaCKQa0Fb3l"
SCOPES = ["https://www.googleapis.com/auth/drive"]

def get_ssl_context():
    ctx = ssl.create_default_context()
    try:
        import certifi
        ctx.load_verify_locations(certifi.where())
    except Exception:
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE
    return ctx

def get_access_token():
    if not os.path.exists(KEY_FILE):
        print(f"Error: Key file '{KEY_FILE}' not found.", file=sys.stderr)
        sys.exit(1)
    creds = service_account.Credentials.from_service_account_file(KEY_FILE, scopes=SCOPES)
    creds.refresh(Request())
    return creds.token, creds.service_account_email

def check_connection():
    token, email = get_access_token()
    print(f"[*] Authenticated as Service Account: {email}")
    ctx = get_ssl_context()

    # Check root folder access
    url = f"https://www.googleapis.com/drive/v3/files/{MASTER_ROOT_ID}?fields=id,name,capabilities,owners"
    req = urllib.request.Request(url, headers={"Authorization": f"Bearer {token}"})

    try:
        with urllib.request.urlopen(req, context=ctx) as resp:
            data = json.loads(resp.read().decode())
            print(f"[✓] Root Folder Connected: '{data.get('name')}' (ID: {data.get('id')})")
    except urllib.error.HTTPError as e:
        if e.code == 404:
            print(f"[!] Access Error: Folder ID '{MASTER_ROOT_ID}' is not found or not shared with this Service Account.", file=sys.stderr)
            print(f"    ACTION REQUIRED: In Google Drive, please right-click 'HR - Services' -> Share -> Add '{email}' as Editor.", file=sys.stderr)
            return False
        else:
            print(f"[!] API Error ({e.code}): {e.read().decode()}", file=sys.stderr)
            return False

    # List children
    query = urllib.parse.quote(f"'{MASTER_ROOT_ID}' in parents and trashed = false")
    list_url = f"https://www.googleapis.com/drive/v3/files?q={query}&fields=files(id,name,mimeType)&pageSize=100"
    list_req = urllib.request.Request(list_url, headers={"Authorization": f"Bearer {token}"})

    with urllib.request.urlopen(list_req, context=ctx) as resp:
        res = json.loads(resp.read().decode())
        files = res.get("files", [])
        print(f"\n[+] Total items found in HR - Services: {len(files)}")
        folders = [f for f in files if f.get("mimeType") == "application/vnd.google-apps.folder"]
        regular_files = [f for f in files if f.get("mimeType") != "application/vnd.google-apps.folder"]

        if folders:
            print(f"\n--- FOLDERS ({len(folders)}) ---")
            for f in sorted(folders, key=lambda x: x["name"]):
                print(f" 📁 {f['name']} (ID: {f['id']})")

        if regular_files:
            print(f"\n--- FILES ({len(regular_files)}) ---")
            for f in sorted(regular_files, key=lambda x: x["name"]):
                print(f" 📄 {f['name']} (ID: {f['id']})")

    return True

if __name__ == "__main__":
    check_connection()
