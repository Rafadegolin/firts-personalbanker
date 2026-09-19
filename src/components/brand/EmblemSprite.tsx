import {
  EMBLEM_PATHS,
  EMBLEM_VIEWBOX,
  MONOGRAM_VIEWBOX,
} from "@/components/brand/emblem-paths";

// Símbolos SVG do emblema, renderizados uma única vez no <body>.
// As cores vêm das variáveis --logo-* do tema onde o <use> é inserido.
export function EmblemSprite() {
  return (
    <svg
      aria-hidden
      focusable="false"
      width="0"
      height="0"
      style={{ position: "absolute", overflow: "hidden" }}
    >
      <symbol id="eg-emblem" viewBox={EMBLEM_VIEWBOX}>
        <path style={{ fill: "var(--logo-ink)" }} d={EMBLEM_PATHS.globe} />
        <path style={{ fill: "var(--logo-line)" }} d={EMBLEM_PATHS.arc} />
        <path style={{ fill: "var(--logo-line)" }} d={EMBLEM_PATHS.divider} />
        <path style={{ fill: "var(--logo-ink)" }} d={EMBLEM_PATHS.e} />
        <path style={{ fill: "var(--logo-gold)" }} d={EMBLEM_PATHS.g} />
      </symbol>
      <symbol id="eg-monogram" viewBox={MONOGRAM_VIEWBOX}>
        <path style={{ fill: "var(--logo-ink)" }} d={EMBLEM_PATHS.e} />
        <path style={{ fill: "var(--logo-gold)" }} d={EMBLEM_PATHS.g} />
      </symbol>
    </svg>
  );
}
