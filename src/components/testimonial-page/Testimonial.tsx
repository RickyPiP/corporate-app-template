import React from "react";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import styled from "@emotion/styled";
import "twin.macro";

type TestimonialProps = {
  proprieties: {
    url: string;
    text: string;
    name: string;
    job: string;
  };
};

const Testimonial = ({ proprieties }: TestimonialProps) => {
  return (
    <div tw="mb-5">
      <div>
        <div>
          <div tw="bg-gray-800 pt-16 lg:py-24">
            <div tw="pb-16 bg-indigo-600 lg:pb-0 lg:relative">
              <div tw="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
                <div tw="relative lg:-my-8 ">
                  <div tw="absolute inset-x-0 top-0 h-1/2 bg-gray-800 lg:hidden"></div>
                  <div tw="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                    <div tw="rounded-xl shadow-xl overflow-auto relative  lg:h-full">
                      <img
                        tw="object-cover lg:h-full lg:w-full"
                        src={proprieties.url}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div tw="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                  <div tw="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                    <blockquote>
                      <div>
                        <svg
                          tw="h-12 w-12 text-white opacity-25"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p tw="mt-6 text-2xl font-medium text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sequi consectetur sed saepe asperiores, nobis
                          atque aspernatur eligendi soluta magni autem suscipit
                          voluptatibus assumenda eos. Laudantium tenetur
                          perspiciatis eum voluptas aliquam?
                        </p>
                      </div>
                      <footer tw="mt-6">
                        <p tw="text-base font-medium text-white">
                          {proprieties.name}
                        </p>
                        <p tw="text-base font-medium text-indigo-100">
                          {proprieties.job}
                        </p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;