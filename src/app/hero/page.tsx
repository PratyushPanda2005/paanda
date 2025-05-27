"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Logo from "../../../public/images/svgs/logo.svg";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import gsap from "gsap";

const Hero = () => {
  const emailRef = useRef<HTMLSpanElement>(null);
  const rect = useRef<SVGRectElement>(null);
  const svgContainer = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!rect.current || !svgContainer.current) return;
  
    const isMobile = window.innerWidth <= 768;
    const initialWidth = isMobile ? 20 : 40;
    const targetWidth = isMobile ? 80 : 120;
  
    rect.current.setAttribute("width", `${initialWidth}`);
    svgContainer.current.style.width = `${initialWidth}px`;
  
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2.2 });

    tl.to(rect.current, {
      attr: { width: targetWidth },
      duration: 1.2,
      ease: "expo.out",
      delay: 2.2,
      onUpdate: () => {
        const currentWidth = parseFloat(
          rect.current?.getAttribute("width") || initialWidth.toString()
        );
        svgContainer.current!.style.width = `${currentWidth}px`;
      },
    });
    
    // Shrink animation (back to initial width)
    tl.to(rect.current, {
      attr: { width: initialWidth },
      duration: 0.6,
      ease: "power2.in",
      onUpdate: () => {
        const currentWidth = parseFloat(
          rect.current?.getAttribute("width") || initialWidth.toString()
        );
        svgContainer.current!.style.width = `${currentWidth}px`;
      },
    });
    
  
    return () => {
      tl.kill();
    };
  }, []);
  

  const copyEmailToClipboard = () => {
    if (!emailRef.current) return;

    const email = emailRef.current.textContent?.trim();
    if (!email) return;

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          toast.success("Email copied to clipboard!", {
            position: "top-center",
            style: {
              background: "#000",
              color: "#fff",
              border: "1px solid #333",
              borderRadius: "8px",
            },
            icon: "🐼",
          });
        })
        .catch(() => {
          fallbackCopyToClipboard(email);
        });
    } else {
      fallbackCopyToClipboard(email);
    }
  };

  const fallbackCopyToClipboard = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      const success = document.execCommand("copy");
      if (success) {
        toast.success("Email copied!", { position: "top-center" });
      } else {
        throw new Error("Copy failed");
      }
    } catch {
      toast.error("Press Ctrl+C to copy", {
        position: "top-center",
        duration: 4000,
      });
    } finally {
      document.body.removeChild(textArea);
    }
  };


  const SimpleRectangle = ({
    fill = "currentColor",
    stroke = "none",
    strokeWidth = 0,
    className = "",
  }: {
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    className?: string;
  }) => {
    return (
      <span className="inline-flex items-center overflow-hidden">
        <svg
          ref={svgContainer}
          viewBox="0 0 20 16"
          className={`h-2 md:h-3 lg:h-3 xl:h-4 ${className}`}
          preserveAspectRatio="none"
          style={{ width: "40px" }} 
        >
          <rect
            ref={rect}
            width="40"
            height="16"
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        </svg>
      </span>
    );
  };
  

  return (
    <section className="h-dvh min-h-screen w-full flex justify-center items-center px-6 sm:px-14 md:px-24 overflow-hidden bg-black text-white relative">
      <Toaster
        position="top-center"
        toastOptions={{
          className: "bg-black text-white border border-gray-800",
          duration: 2000,
        }}
      />

      <div className="w-full max-w-7xl">
        <div className="w-full flex justify-center items-center">
          <div className="max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl">
            <div className="w-full flex flex-col gap-10">
              <Image src={Logo} alt="" />
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-left font-extrabold tracking-[-3.52px] leading-[100%] font-lausanne ">
                pr<span className="">o</span>nounced as p<span>a</span>an-daah.
              </h1>
              <div className="flex flex-col gap-6 font-lausannelight">
                <div>
                  <p className="max-w-md leading-[150%]">
                    A human driven by storytelling & visual craft. Currently
                    designing at Verloop, previously at Tartan.
                  </p>
                </div>
                <div className="h-[1px] bg-[#525252]" />
                <div>
                  <p className="max-w-md text-[#898989] leading-[150%]">
                    My 2025 portfolio is under construction—while that’s
                    happening, you can find me on{" "}
                    <Link
                      target="blank"
                      href="https://www.linkedin.com/in/pratik-panda/"
                      className="text-white underline"
                    >
                      LinkedIn
                    </Link>
                    , or say{" "}
                    <span
                      ref={emailRef}
                      onClick={copyEmailToClipboard}
                      className="text-white underline cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      hellopaandaa@gmail.com
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;