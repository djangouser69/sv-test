export const load = async () => {
  const jwt = localStorage.getItem("jwt");
  console.log({ jwt });
};
