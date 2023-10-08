export const Notification = ({ message }) => {
  return (
    <h3
      style={{
        margin: 8,
        padding: '12px 16px',
        fontSize: '30px',
        fontWeight: 700,
        // borderColor: 'rgb(189, 29, 56)',
        backgroundColor: 'white',
        color: 'green',
      }}
    >
      {message}
    </h3>
  );
};
