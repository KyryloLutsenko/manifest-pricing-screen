import RootLayout from "@/components/Layout/layout";
import GrowthBookWrapper from "@/context/GrowthBookProvider";
import Home from "@/pages";

function MyApp() {
  return (
    <GrowthBookWrapper>
      <RootLayout>
        <Home />
      </RootLayout>
    </GrowthBookWrapper>
  );
}

export default MyApp;
