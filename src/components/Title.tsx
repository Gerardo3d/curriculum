export const Title = ({ titulo }: any) => {
  return (
    <div className="title">
      <div className={`title__Line`}></div>
        <h2>{titulo}</h2>
      <div className={`title__Line`}></div>
    </div>
  );
};
