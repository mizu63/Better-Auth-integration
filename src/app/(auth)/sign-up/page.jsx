"use client";

import { signIn, signUp } from "../../../lib/auth-client";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUpPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await signUp.email({
      name,
      email,
      password,
    });

    if (error) {
      console.log("Signup Error:", error.message);
      return;
    }

    console.log("Signup Success:", data);

 a
    router.push("/sign-in");
  };

//  const handle = async () => {
//   const { data: resdata, error } = await signIn.social({
//     provider: "google",
//   });

//   if (error) {
//     console.log("Google Sign In Error:", error.message);
//     return;
//   }

//   console.log("Google Sign In Success:", resdata);
// };
   const handle = async () => {
  const { data, error } = await signIn.social({
    provider: "google",
    callbackURL: "/",
  });

  if (error) {
    console.log("Google Sign In Error:", error);
    return;
  }

  console.log("Google Sign In Success:", data);
};
  return (
    <div>
      <h1>Sign-Up</h1>

      <Form
        className="flex w-96 flex-col gap-4"
        onSubmit={onSubmit}
      >
        {/* Name */}
        <TextField
          isRequired
          name="name"
          validate={(value) => {
            if (value.length < 3) {
              return "Name must be at least 3 characters";
            }

            return null;
          }}
        >
          <Label>Name</Label>

          <Input
            name="name"
            placeholder="John Doe"
            variant="secondary"
          />

          <FieldError />
        </TextField>

        {/* Email */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                value
              )
            ) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>

          <Input
            name="email"
            type="email"
            placeholder="john@example.com"
          />

          <FieldError />
        </TextField>

        {/* Password */}
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }

            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }

            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>

          <InputGroup className="w-full">
            <InputGroup.Input
              name="password"
              className="w-full"
              type={isVisible ? "text" : "password"}
              placeholder="Enter your password"
            />

            <InputGroup.Suffix className="pe-0">
              <Button
                type="button"
                isIconOnly
                aria-label={
                  isVisible ? "Hide password" : "Show password"
                }
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>

          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>

          <FieldError />
        </TextField>

        {/* Buttons */}
        <div className="flex gap-2">
          <Button type="submit">
            Sign Up
          </Button>

          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
      <p>OR</p>
        <Button onClick={handle}> Sign in with Google</Button>
   
     
    </div>
  );
};

export default SignUpPage;
