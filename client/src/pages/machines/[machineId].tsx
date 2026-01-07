import { useRoute } from "wouter";
import { MachinePage } from "@/components/machines";
import { machines } from "@/config/machines";
import NotFound from "@/pages/not-found";
import { getMachineImagePath } from "@/lib/assets/machines";

export default function MachineDetailPage() {
  const [, params] = useRoute("/machines/:machineId");
  const machineId = params?.machineId;

  if (!machineId || !machines[machineId]) {
    return <NotFound />;
  }

  const image = getMachineImagePath(machineId);

  return <MachinePage machineId={machineId} image={image} />;
}

