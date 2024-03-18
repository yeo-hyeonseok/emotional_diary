import { useRecoilValue } from "recoil";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { todoListStatsState } from "store";

interface Props {
  className?: string;
}

export default function TodoStats(props: Props) {
  const { className } = props;

  const { total, totalComplete, totalUncomplete, ratio } =
    useRecoilValue(todoListStatsState);

  return (
    <div className={`${className} flex w-full items-center justify-around`}>
      <StatsItem key="total" label="total" text={total} />
      <StatsItem key="completed" label="completed" text={totalComplete} />
      <StatsItem
        key="uncompleted"
        label="uncompleted"
        text={totalUncomplete.toString()}
      />
      <div className="w-10">
        <CircularProgressbar
          value={ratio}
          text={`${ratio}%`}
          styles={buildStyles({
            strokeLinecap: "butt",
            textSize: "25px",
            pathTransitionDuration: 0.5,
            pathColor: `#d6d6d6`,
            textColor: "#ffffff",
            trailColor: "#4b5563",
          })}
        />
      </div>
    </div>
  );
}

function StatsItem(props: { label: string; text: string }) {
  const { label, text } = props;

  return (
    <div className="flex flex-col items-center">
      <span className="text-xs">{label}</span>
      <p className="text-xl">{text}</p>
    </div>
  );
}
