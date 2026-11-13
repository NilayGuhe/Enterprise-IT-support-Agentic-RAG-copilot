from app.core.config import get_settings

settings = get_settings()

print(f"Application Name: {settings.app_name}")
print(f"Environment: {settings.app_env}")
print(f"Google API Key: {settings.google_api_key}")