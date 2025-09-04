"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, FormEvent } from "react";
import { stringifyUrl } from "query-string";

const Search = () => {
  const [term, setTerm] = useState("");
  const router = useRouter();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!term) return;

    const url = stringifyUrl(
      { url: "/search", query: { term } },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative w-full lg:w-1/3 flex items-center"
    >
      <Input
        className="rounded-r-[0px] focus-visible:ring-0 shadow-none font-Montserrat"
        placeholder="Search for anything"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      {term && (
        <X
          onClick={() => setTerm("")}
          className="absolute top-2 right-10 size-5 cursor-pointer hover:opacity-75 transition-all"
        />
      )}
      <Button type="submit" variant={"outline"} className="rounded-l-[0px]">
        <SearchIcon />
      </Button>
    </form>
  );
};

export default Search;
