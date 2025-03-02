from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import get_user_model
from firebase_admin import auth
User = get_user_model()
class FirebaseAuthentication(BaseAuthentication):
    def authenticate(self, request):
        auth_header = request.headers.get("Authorization")
        if not auth_header or not auth_header.startswith("Bearer "):
            return None
        id_token = auth_header.split("Bearer ")[1]

        try:
            decoded_token = auth.verify_id_token(id_token)
            uid = decoded_token.get("uid")
            email = decoded_token.get("email", "")

            user = User.objects.get_or_create(
                username=uid, defaults={"email": email}
            )
            return (user, None)

        except Exception as e:
            raise AuthenticationFailed(f"Firebase authentication failed: {e}")