"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const LocationDetector = () => {
  const [loading, setLoading] = useState(false);
  const searchPerams = useSearchParams();
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setLoading(true)
    const params = new URLSearchParams(searchPerams)


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        params.set("latitude", position.coords.latitude)
        params.set("longitude", position.coords.longitude)
        setLoading(false)
        router.push(`/current?${params.toString()}`)
      })
    }
  }, [pathname,searchPerams])
  return (
    <div>
      LocationDetector
    </div>
  );
};

export default LocationDetector;