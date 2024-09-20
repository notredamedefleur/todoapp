export const pickRandomColor = () => {
    let colorArr = [];

    if (colorArr.length === 0) {
    colorArr = [
      "#FFEDFF",
      "#FAFFC0",
      "#FFFFFF",
      "#D3DDFF",
      "#AFDDC4",
      "#FFDBB0",
      "#E9D7FF",
      "#FFCDDF",
    ];
  }

  return colorArr[Math.floor(Math.random() * colorArr.length)];
};
