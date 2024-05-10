import { Stack } from "@mui/material";
import React from "react";

export function HomePage() {
  return (
    <div className="flex flex-column h-72 bg-lightDark px-8">
      <h4 className="py-8 text-white text-center">Welcome to TOCFL Learning</h4>
      <h5 className="py-2 text-white">
        The Test of Chinese as a Foreign Language (TOCFL) is a set of
        standardized language proficiency tests developed for non-native
        speakers of Chinese.
      </h5>
      <h5 className="text-white">
        This website can help you in your studies by easily searching for
        vocabulary that is requiered to know to pass the TOCFL exam, with
        english meaning and sentences.
      </h5>
      <h5 className="text-white">
        Currently not all vocabulary words have sentences (the coverage is about
        35%), but more sentences will be added gradually.
      </h5>
      <h5 className="text-white">
        You can access the TOCFL vocabulary list and official informations about the TOCFL exam using the menu.
      </h5>
    </div>
  );
}
