"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchCheck, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Search = () => {
  const [term, setTerm] = useState();
  const router = useRouter();

  const onSubmit = (e: formEvent<HTMLformElement>) => {
    e.preventDefault();
    if (!term) return;
    const url = qs.stringifyUrl(
      { url: "/search", query: { term } },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  };
  return (
    <form className="relative w-full lg:w-1/3 flex items-center">
      <Input
        className="rounded-r-[0px] focus-visible:ring-0 shadow-none font-Montserrat"
        placeholder="search for anythink"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      {term && (
        <X
          onClick={() => setTerm("")}
          className="absolute top-2 right-10 size-5 cursor-pointer hover:opacity-75 transition-all"
        />
      )}
      <Button
        onClick={() => onSubmit()}
        variant={"outline"}
        className="rounded-l-[0px]"
      >
        <SearchCheck />
      </Button>
    </form>
  );
};

export default Search;
