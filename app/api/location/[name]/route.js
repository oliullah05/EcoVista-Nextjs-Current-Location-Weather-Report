import { NextResponse } from "next/server";
import { getLocationByName } from "../location-utils";

export async function GET (request,{params}){
    const locationDetails = getLocationByName(params?.name)

    return NextResponse.json(locationDetails)
}