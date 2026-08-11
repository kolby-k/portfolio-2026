export type TagColors = "blue" | "green" | "purple" | "orange";
export type TagProps = {
  label: string;
  color: TagColors;
};
function Tag({ label, color }: TagProps) {
  return (
    <div className={`tag ${color}_tag`}>
      <p>{label}</p>
    </div>
  );
}

export default Tag;
