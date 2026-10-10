import PageEffects from "./PageEffects";

export default function PageShell({ page, children }) {
  return (
    <div className="page-shell" data-page={page}>
      {children}
      <PageEffects />
    </div>
  );
}
