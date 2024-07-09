"use server";

import { UserProps } from "@/types";
import CryptoJS from "crypto-js";
import { cookies } from "next/headers";

const SECRET_KEY_ENCRYPTION = process.env.SECRET_KEY_ENCRYPTION as string;

function encrypt(payload: any) {
  return CryptoJS.AES.encrypt(
    JSON.stringify(payload),
    SECRET_KEY_ENCRYPTION,
  ).toString();
}

function decrypt(input: string) {
  const bytes = CryptoJS.AES.decrypt(input, SECRET_KEY_ENCRYPTION);
  // return decrypted data
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

/**
 * Login user and store session with user data
 * @param user
 */
export async function loginUserAndSetSession(user: UserProps) {
  const encryptedData = encrypt(user);

  cookies().set("user", encryptedData);
}

/**
 * Get the authenticated user session
 */
export async function getUserSession(): Promise<UserProps | null> {
  const encryptedUserData = cookies().get("user")?.value;

  if (!encryptedUserData || encryptedUserData.length === 0) {
    return null;
  }

  // return user data
  return decrypt(encryptedUserData);
}

/**
 * Logout user and remove session
 */
export async function logoutUserAndRemoveSession() {
  cookies().set("user", "");
}

/**
 * Check if the user is authenticated
 */
export async function isAuthenticatedUser(): Promise<boolean | null> {
  const userCookie = cookies().get("user")?.value;
  // return true if authenticated
  return userCookie !== undefined && userCookie.length !== 0;
}
