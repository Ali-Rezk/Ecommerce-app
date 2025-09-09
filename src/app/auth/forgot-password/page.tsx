import VerificationCodeInput from "./_components/VerificationCodeInput";

export default function ForgotPasswordPage() {
  return (
    <div className="flex flex-col mt-6 justify-center ">
      <h1 className="text-2xl font-bold mb-4">
        please enter your verification code
      </h1>
      <VerificationCodeInput />
    </div>
  );
}
