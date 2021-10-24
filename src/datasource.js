import moment from "moment";
const dataMaker = (index) => {
  const check = parseInt((Math.random() * 100) / 3);
  const image = Math.floor(Math.random() * 4) + 1;
  if (check < 10) {
    return {
      id: index,
      name: "Test Whatsapp",
      region: "US",
      createdOn: moment(moment().format("MM/DD/YYYY")).valueOf(),
      price: [
        { time: "1 week", value: "10" },
        { time: "4 week", value: "50" },
        { time: "8 week", value: "100" },
      ],
      csv: "Some CSV link for Whatsapp",
      report: "Some report link for Whatsapp",
      image_url: image,
    };
  }
  if (check < 20) {
    return {
      id: index,
      name: "Test Whatsapp",
      region: "US",
      createdOn: moment()
        .subtract(parseInt(Math.random() * 100), "days")
        .valueOf(),
      price: [
        { time: "1 week", value: "10" },
        { time: "4 week", value: "50" },
        { time: "8 week", value: "100" },
      ],
      csv: "Some CSV link for Whatsapp",
      report: "Some report link for Whatsapp",
      image_url: image,
    };
  }
  return {
    id: index,
    name: "Test Whatsapp",
    region: "US",
    createdOn: moment()
      .add(parseInt(Math.random() * 100), "days")
      .valueOf(),
    price: [
      { time: "1 week", value: "10" },
      { time: "4 week", value: "50" },
      { time: "8 week", value: "100" },
    ],
    csv: "Some CSV link for Whatsapp",
    report: "Some report link for Whatsapp",
    image_url: image,
  };
};
const data = () => {
  return Array.from({ length: 50 }, (_, index) => dataMaker(index));
};

export default data;
