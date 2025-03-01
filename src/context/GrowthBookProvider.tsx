import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";
import { useEffect, useState } from "react";

const FEATURES = {
  "pricing-test": {
    defaultValue: "B",
    rules: [
      {
        condition: { userId: { $exists: true } },
        variations: ["A", "B"],
        weights: [0.5, 0.5],
      },
    ],
  },
};

const growthbook = new GrowthBook({
  apiHost: "https://api.growthbook.io",
  clientKey: "secret_admin_WNf8Zxt5cf4FQpxhU3dBIfoDbzXQwlMzFx3Bf4uTFs",
  enableDevMode: true,
});

const GrowthBookWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      growthbook.setFeatures(FEATURES);
      setIsReady(true);
    }, 1000);
  }, []);

  if (!isReady) return <p>Loading...</p>;

  return (
    <GrowthBookProvider growthbook={growthbook}>{children}</GrowthBookProvider>
  );
};

export default GrowthBookWrapper;
