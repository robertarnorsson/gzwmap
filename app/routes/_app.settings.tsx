import { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { useData } from "~/context/DataContext";
import { ChevronLeft, SwatchBook, Swords } from "lucide-react";
import { Switch } from "~/components/ui/switch";
import { useLocalStorage } from "~/context/LocalStorageContext";
import { Slider } from "~/components/ui/slider";

export const meta: MetaFunction = () => {
  return [
    { title: "GZW Map - Settings" },
    { name: "description", content: "Manage settings for your GZW Map experience." },
  ];
};

export default function Settings() {
  const { data, actions } = useLocalStorage();
  const { factions, loaded } = useData();

  return (
    <div className="flex flex-col w-full min-h-screen">
      <main className="flex flex-1 grid-bg flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="max-w-6xl w-full mx-auto grid gap-2">
          <h1 className="font-semibold text-3xl">Settings</h1>
        </div>
        <div className="grid md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr] items-start gap-6 max-w-6xl w-full mx-auto">
          <div className="space-y-4">
            <Link to='/' reloadDocument className="mb-2">
              <Button variant="secondary" className="flex items-center">
                <ChevronLeft className="mr-2" /> Back
              </Button>
            </Link>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Links</h3>
              <nav className="text-sm grid gap-3">
                <Link to="#faction" className="flex flex-row items-center space-x-1.5">
                  <Swords className="w-4 h-4" />
                  <span>Faction</span>
                </Link>
                <Link to="#markers" className="flex flex-row items-center space-x-1.5">
                  <SwatchBook className="w-4 h-4" />
                  <span>Markers</span>
                </Link>
              </nav>
            </div>
          </div>
          <div className="grid gap-6">
            <section id="faction">
              <Card>
                <CardHeader>
                  <CardTitle>Faction</CardTitle>
                  <CardDescription>Choose what faction you are in</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center items-center w-full">
                    <div className="flex max-w-[450px] justify-evenly items-center w-full">
                      {!loaded ? (
                        <>
                          <div className="w-20 h-20 md:w-24 md:h-24 bg-secondary animate-pulse rounded-xl"></div>
                          <div className="w-20 h-20 md:w-24 md:h-24 bg-secondary animate-pulse rounded-xl"></div>
                          <div className="w-20 h-20 md:w-24 md:h-24 bg-secondary animate-pulse rounded-xl"></div>
                        </>
                      ) : (
                        factions.map((f) => (
                          <button
                            key={f.id}
                            onClick={() => actions.user.updateFaction(f.id)}
                            className="relative group"
                          >
                            <img
                              src={`/${f.image}`}
                              alt={f.name}
                              className={`w-20 h-20 md:w-24 md:h-24 cursor-pointer p-1 transition duration-200 ${
                                data.user.faction === f.id ? "scale-105" : "filter brightness-50"
                              }`}
                            />
                          </button>
                        ))
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
            <section id="appearance">
              <Card>
                <CardHeader>
                  <CardTitle>Markers</CardTitle>
                  <CardDescription>Choose what markers to show on the map</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Show completed</p>
                      <p className="text-sm text-muted-foreground">Show completed objectives markers on the map.</p>
                    </div>
                    <Switch
                      checked={data.user.settings.showCompletedObjectives}
                      onCheckedChange={() => actions.user.setting.toggleShowCompletedObjectives()}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Show canceled</p>
                      <p className="text-sm text-muted-foreground">Show canceled objectives markers on the map.</p>
                    </div>
                    <Switch
                      checked={data.user.settings.showCanceledObjectives}
                      onCheckedChange={() => actions.user.setting.toggleShowCanceledObjectives()}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Marker size</p>
                      <p className="text-sm text-muted-foreground">Adjust the marker size to your preference.</p>
                    </div>
                    <Slider
                      defaultValue={[data.user.settings.markerSize]}
                      max={5}
                      step={1}
                    />
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
