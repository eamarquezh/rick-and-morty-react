// eslint-disable-next-line react/prop-types
export default function ContainerCard({ children }){
    return (

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    );
}
  