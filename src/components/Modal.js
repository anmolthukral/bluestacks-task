import { useTranslation } from "react-i18next";
import Imageitem from "./Imageitem";
export default function Modal({ image, name, region, price, onClose }) {
  const { t } = useTranslation();

  return (
    <div className="modal">
      <div className="modal-body">
        <div className="title-div">
          <Imageitem value={image} />
          <div className="pull-down">
            <h1> {name}</h1>

            <h2>{region}</h2>
          </div>
        </div>
        <h2>{t("pricing")}</h2>
        <table>
          {price.map((i) => (
            <tr>
              <td>{i.time}</td>
              <td>{i.value}</td>
            </tr>
          ))}
        </table>
        <button onClick={onClose}>{t("close")}</button>
      </div>
    </div>
  );
}
