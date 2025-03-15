import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router";
import supabase from "../helper/SupabaseClient";

type Inputs = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error("Sign up error:", error.message);
    } else {
      console.log("Account created successfully");
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <form
        className="flex w-1/3 flex-col items-center justify-center gap-4 rounded-3xl border-4 px-10 py-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Email */}
        <div className="flex w-full items-center justify-between">
          <label>Email:</label>
          <input
            type="email"
            className="ml-3 rounded-sm border px-3 py-1"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
        </div>
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}

        {/* Username */}
        <div className="flex w-full items-center justify-between">
          <label>Username:</label>
          <input
            className="ml-3 rounded-sm border px-3 py-1"
            placeholder="Username"
            {...register("username", { required: "Username is required" })}
          />
        </div>
        {errors.username && (
          <span className="text-red-500">{errors.username.message}</span>
        )}

        {/* Password */}
        <div className="flex w-full items-center justify-between">
          <label>Password:</label>
          <input
            type="password"
            className="ml-3 rounded-sm border px-3 py-1"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
        </div>
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}

        {/* Confirm Password */}
        <div className="flex w-full items-center justify-between">
          <label>Confirm Password:</label>
          <input
            type="password"
            className="ml-3 rounded-sm border px-3 py-1"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
        </div>
        {errors.confirmPassword && (
          <span className="text-red-500">{errors.confirmPassword.message}</span>
        )}

        {/* Submit Button */}
        <input
          type="submit"
          value="Create Account"
          className="cursor-pointer rounded-lg bg-blue-800 px-8 py-2 text-white"
        />
        <div className="flex flex-row gap-3">
          <p className="">already have an account</p>

          <Link to={"/login"} className="text-blue-800 underline">
            login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
