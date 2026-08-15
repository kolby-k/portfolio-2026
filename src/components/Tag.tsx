export type TagColors = "blue" | "green" | "purple" | "orange";
export type TagProps = {
  label: string;
  color: TagColors;
  style?: string;
};
function Tag({ label, color, style }: TagProps) {
  return (
    <div className={`tag ${color}_tag ${style}`}>
      <p>{label}</p>
    </div>
  );
}

export default Tag;
