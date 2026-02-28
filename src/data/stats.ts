import yearsExperienceIcon from "../assets/icons/years-experience.png";
import sqFtRenovatedIcon from "../assets/icons/sq-ft-renovated.png";
import projectsCompletedIcon from "../assets/icons/projects-completed.png";
import clientSatisfactionIcon from "../assets/icons/client-satisfaction.png";

export interface StatItem {
  icon: string;
  value: number;
  suffix: string;
  label: string;
}

export const STATS: StatItem[] = [
  {
    icon: projectsCompletedIcon,
    value: 100,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: yearsExperienceIcon,
    value: 15,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    icon: sqFtRenovatedIcon,
    value: 500,
    suffix: "K+",
    label: "Sq. Ft. Renovated",
  },
  {
    icon: clientSatisfactionIcon,
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
  },
];
