import { Badge } from "antd";

export const ComponentBadge = () => <Badge count="Component" color="var(--lightgrey)" />;
export const RequiredBadge = () => <Badge count="Required" color="var(--red)" />;
export const TypeBadge = (text: string) => <Badge text={text} color="var(--fiskaltrust)" />;