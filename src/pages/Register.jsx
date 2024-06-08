import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import registerIcon from "../../public/registerIcon.svg";
import twiticon from "../../public/twit.svg";
import faceBookIcon from "../../public/facebook.svg";
import lockIcon from "../../public/lock.svg";
import eyeIcon from "../../public/eye.svg";
import arrowIcon from "../../public/arrow.svg";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export function Register() {
  const [show, setShow] = useState("password");
  return (
    <Card className="max-w-[344px] w-full h-[620px] p-4 flex items-center justify-center flex-col rounded-xl border-[0.5px] border-[#E5E7EB]">
      <img
        className="inline-block w-16 h-16 mb-3"
        src={registerIcon}
        alt="register icon"
      />
      <CardHeader className="p-0 mb-5 text-center ">
        <CardTitle className="mb-1 tracking-tight text-[20px] font-semibold leading-7 ">
          Create project
        </CardTitle>
        <CardDescription className="text-[14px] leading-5 text-[#6B7280]">
          Deploy your new project in one-click.
        </CardDescription>
      </CardHeader>
      <div className="w-full mb-4">
        <Button className="connectBtn group w-full flex items-center justify-center gap-2 mb-2 px-4 py-2 rounded-[128px] bg-[#fff] text-[#111] border-[0.5px] hover:bg-[#fff] border-[#D1D5DB]">
          <img src={faceBookIcon} alt="facebook icon" />
          <p className="text-[14px] font-semibold text-[#111827] leading-5 group-hover:text-[#06B6D4]">
            Connect with Facebook
          </p>
        </Button>
        <Button className="connectBtn group w-full flex items-center justify-center gap-2  px-4 py-2 rounded-[128px] bg-[#fff] text-[#111] border-[0.5px] hover:bg-[#fff] border-[#D1D5DB]">
          <img src={twiticon} alt="twitter icon" />
          <p className="text-[14px] font-semibold text-[#111827] leading-5  group-hover:text-[#06B6D4]">
            Connect with Twitter
          </p>
        </Button>
      </div>
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="w-[77px] inline-block h-[0.5px] bg-[#D1D5DB]"></span>
        <p className="text-[14px] leading-5 text-[ #6B7280]">
          or sign in with email
        </p>
        <span className="w-[77px] inline-block h-[0.5px] bg-[#D1D5DB]"></span>
      </div>
      <CardContent className="w-full p-0 mb-4">
        <form>
          <div className="grid w-full items-center">
            <div className="flex flex-col mb-4">
              <Label
                className="mb-2 text-[14px] font-semibold text-[#111] leading-5"
                htmlFor="email"
              >
                Email
              </Label>
              <Input
                className="connectInput focus:shadow-md m-0 rounded-[256px] focus-visible:ring-0 outline-none focus-visible:ring-offset-0"
                id="email"
                type="email"
                placeholder="info@pixsellz.io"
              />
            </div>
            <div className="flex flex-col mb-4">
              <Label
                className="mb-2 text-[14px] font-semibold text-[#111] leading-5"
                htmlFor="name"
              >
                Password
              </Label>
              <div className="relative">
                <span className="absolute w-4 h-4 flex items-center justify-center top-[11px] left-[10px]">
                  <img src={lockIcon} alt="" />
                </span>
                <Input
                  className="connectInput focus:shadow-md m-0 pl-[34px] py-2 rounded-[256px] focus-visible:ring-0 outline-none focus-visible:ring-offset-0"
                  id="password"
                  type={show}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShow(show === "password" ? "text" : "password")
                  }
                  className="absolute w-4 h-4 flex items-center justify-center top-[11px] right-[10px]"
                >
                  <img src={eyeIcon} alt="eye" />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-start gap-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember for 30 days
              </label>
            </div>
          </div>
        </form>
      </CardContent>
      <Button className="w-full flex items-center justify-center gap-[6px] px-4 py-2 rounded-[128px] bg-[#06B6D4] transition-all duration-300 ease-linear">
        <span>Sign In</span>
        <img className="inline-block" src={arrowIcon} alt="arrow" />
      </Button>
      <div className="flex items-center justify-center gap-1 mt-5">
        <p className="text-[14px] leading-5">No account?</p>
        <a
          className="text-[14px] leading-5 text-[#06B6D4] hover:text-[#ea1538] transition-all duration-500 ease-linear"
          href="https://docs.google.com/document/d/1fOcf6zvhTmT7vQxsDRCkxlj4EqzTuLIN/edit?usp=sharing&ouid=101136358082815035893&rtpof=true&sd=true"
        >
          {"Create an account"}
        </a>
      </div>
    </Card>
  );
}
