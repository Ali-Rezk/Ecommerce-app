export interface ForgotPasswordPayload {
  email: string;
}

export interface veryficationCodePayload {
  resetCode: string;
}

export interface ResetPassword {
  email: string;
  newPassword: string;
}

export async function forgotPassword(email: string) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
      cache: "no-store",
    }
  );
  const { data } = await res.json();
  return data;
}

export async function resetCode(id: string) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ resetCode: id }),
      cache: "no-store",
    }
  );
  const { data } = await res.json();
  return data;
}

export async function resetPassword(email: string, newPassword: string) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, newPassword }),
      cache: "no-store",
    }
  );
  const { data } = await res.json();
  return data;
}
