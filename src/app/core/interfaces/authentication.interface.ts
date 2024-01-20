export interface ResponseToken {
  success: boolean;
  session_id: string;
  expires_at: string;
  request_token: string;
}
