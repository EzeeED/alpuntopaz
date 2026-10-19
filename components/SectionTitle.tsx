import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  id?: string;
};

export default function SectionTitle({ eyebrow, title, children, id }: Props) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="mt-1 text-3xl font-semibold sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {children && <div className="mt-5 text-lg leading-relaxed text-tinta/85">{children}</div>}
    </Reveal>
  );
}
