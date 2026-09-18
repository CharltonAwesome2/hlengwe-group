import { renderInline } from "@utils/renderInline";

export default function Bio({ bio }) {
  const paragraphs = Array.isArray(bio) ? bio : [bio];
  return paragraphs.map((para, i) => (
    <p key={i}>{renderInline(para)}</p>
  ));
}