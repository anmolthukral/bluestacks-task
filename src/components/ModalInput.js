import moment from "moment";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ModalInput({ updateDate, eventIndex, onClose }) {
  const { t } = useTranslation();
  const [newDate, setDate] = useState(null);
  return (
    <div className="modal">
      <input
        type="date"
        onChange={(e) => {
          setDate(new moment(e.target.value));
        }}
      />
      <button
        onClick={(e) => {
          updateDate(newDate.valueOf(), eventIndex.id);
        }}
      >
        {t("save")}
      </button>

      <button onClick={onClose}> {t("close")}</button>
    </div>
  );
}
