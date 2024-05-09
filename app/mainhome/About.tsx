"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from "react";

function about() {
  const words = `Jam Operasional`;
  const clock = `Senin - Sabtu (06.00 - 21.00 WIB)`;
  const day = ` Minggu Hari Libur Nasional`;

  return (
    <div>
      <div className="flex flex-col items-center bg-cove bg-black py-0">
        <div className="container">
          <div className="row items-center justify-center text-center">
            <div className="col-md-8">
              <h2 className="text-lg font-bold mb-4">
                <TextGenerateEffect words={words} />
              </h2>
              <span className="text-lg">
                <TextGenerateEffect words={clock} />
                <br />
                <TextGenerateEffect words={day} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
