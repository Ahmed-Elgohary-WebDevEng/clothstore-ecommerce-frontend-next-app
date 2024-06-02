import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const Filter = ({}) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <div className="mt-12 flex justify-between overflow-x-scroll py-6 px-4 hide-scrollbar">
      <div className="flex gap-6">
        <Select name="type">
          <SelectTrigger className="min-w-fit w-[120px]">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="physical">Physical</SelectItem>
            <SelectItem value="digital">Digital</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <Input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        {/* TODO: Filter Categories */}
        <Select name="cat">
          <SelectTrigger className="min-w-fit w-[120px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="arrival">New Arrival</SelectItem>
            <SelectItem value="popular">Popular</SelectItem>
          </SelectContent>
        </Select>
        <Select name="">
          <SelectTrigger className="min-w-fit w-[120px] mx-2">
            <SelectValue placeholder="All Filters" />
          </SelectTrigger>
          <SelectContent></SelectContent>
        </Select>
      </div>
      <div className="">
        <Select name="sort">
          <SelectTrigger className="min-w-fit w-[120px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asc price">Price (low to high)</SelectItem>
            <SelectItem value="desc price">Price (high to low)</SelectItem>
            <SelectItem value="asc lastUpdated">Newest</SelectItem>
            <SelectItem value="desc lastUpdated">Oldest</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Filter;
