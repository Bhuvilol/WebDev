export const Netflix1 = () => {
  const name = "Queen Of Tears";
  const rating = 8.2;
  const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit eaque placeat, perferendis delectus repellendus blanditiis vitae maxime ex minima. Molestiae quam pariatur magnam inventore, impedit voluptatibus enim possimus fugit.";
  const returnGenre = () => {
    return "Drama";
  };
  let age = 11
  let canWatch = () => {
    return age >= 18 ? "Watch Now":"You need to be 18 to watch"
  }
  return (
    <div>
      <div>
        <img src="https://deadline.com/wp-content/uploads/2023/08/billion-gallery.jpg?w=681&h=383&crop=1" alt="logo" width="40%" height ="40%"/>

      </div>
      <h2>Name : {name}</h2>
      <h3>Rating : {rating}</h3>
      <h3>Genre : {returnGenre()} </h3>
      <p>Description : {description}</p>
      <button style={{ marginBottom: "20px" }}>{canWatch()}</button>
    </div>
  );
};

// export default Netflix1;



export const Footer = () => {
    return (
        <div>
            <h1>Footer</h1>
        </div>
    );
};