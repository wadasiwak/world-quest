import { useState } from "react";
import { AVATARS, OUTFIT_TIERS } from "../data/avatars";
import { useGameStore } from "../store/gameStore";
import { playClick, playCollect } from "../lib/sound";
import { useT, L } from "../i18n";

interface Props {
  onDone: () => void;
}

export default function CharacterSelect({ onDone }: Props) {
  const t = useT();
  const lang = useGameStore((s) => s.lang);
  const currentId = useGameStore((s) => s.avatarId);
  const setAvatar = useGameStore((s) => s.setAvatar);
  const [picked, setPicked] = useState<string | null>(currentId);

  const confirm = () => {
    if (!picked) return;
    setAvatar(picked);
    playCollect();
    onDone();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal modal--celebrate">
        <h2>{t("pick_avatar_title")}</h2>
        <p className="modal-intro">{t("pick_avatar_sub")}</p>
        <div className="avatar-grid">
          {AVATARS.map((a) => (
            <button
              key={a.id}
              className={`avatar-option ${picked === a.id ? "avatar-option--on" : ""}`}
              onClick={() => {
                setPicked(a.id);
                playClick();
              }}
            >
              <span className="avatar-option-emoji">{a.emoji}</span>
              <span className="avatar-option-name">{L(a.name, lang)}</span>
            </button>
          ))}
        </div>
        <div className="avatar-tier-preview">
          {OUTFIT_TIERS.map((tier, i) => (
            <span key={i} title={L(tier.title, lang)}>
              {tier.gear}
            </span>
          ))}
        </div>
        <button
          className={`btn btn--primary ${picked ? "" : "btn--dim"}`}
          onClick={confirm}
          disabled={!picked}
        >
          {t("pick_btn")}
        </button>
      </div>
    </div>
  );
}
