type ContainerProps = {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[1440px] w-full">
        {children}
    </div>
  )
}

export default Container