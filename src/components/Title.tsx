export const Title = ({ titulo }: any) => {
  return (
    <div className="title">
      <h2>{titulo}</h2>
      <div className={`title__Line`}></div>
    </div>
  );
};
