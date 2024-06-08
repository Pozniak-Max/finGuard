'use server'

import { log } from "console"
import { createAdminClient, createSessionClient } from "../appwrite";
import { ID } from "node-appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";
import { use } from "react";

export const signIn = async ({email, password}: signInProps) => {
  try{
    const { account } = await createAdminClient();
    const responce = await account.createEmailPasswordSession(email, password);
    return responce;
  }catch(error){
    console.log("Error", error);
  };
}

export const signUp = async (userData: SignUpParams) => {
  const { email, password, firstName, lastName } = userData;
  try{
    const { account } = await createAdminClient();

    const newUserAccount = await account.create(
      ID.unique(), 
      email, 
      password, 
      `${firstName} ${lastName}`
    );
    const session = await account.createEmailPasswordSession(email, password);
  
    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    return parseStringify(newUserAccount);
  
  }catch(error){
    console.log("Error", error);
  };
}


export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();
    return parseStringify(user);
  } catch (error) {
    return null;
  }
}

export async function logOutAccount() {
  try {
    const { account } = await createSessionClient();
    cookies().delete("appwrite-session");
    await account.deleteSession("current");
    return true;
  } catch (error) {
    console.log("Error", error);
    return false;
  }
}