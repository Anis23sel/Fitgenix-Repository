import CircularProgress from "../../../../ui/dashboard/dashboardcard/CircularProgress";
import Statistics from "../../../../ui/dashboard/dashboardcard/Statistics";
import BodyChart from "../../../../ui/dashboard/dashboardcard/BodyChart";
import CurrentScore from "../../../../ui/dashboard/dashboardcard/CurrentScore";

export default function Performance() {
  return (
    <div className="w-full">
        <div className="flex justify-between w-full ">
          <div className="">
            <Statistics />
          </div>
          <div>
          <CurrentScore currentWeight={63} objectiveWeight={75}/>
          <CurrentScore currentWeight={72} objectiveWeight={80}/>
          <CurrentScore currentWeight={97} objectiveWeight={80}/>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <CircularProgress />
            <BodyChart />
         </div>
        </div>
    </div>

  );
}
