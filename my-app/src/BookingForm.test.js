import { render, screen } from "@testing-library/react";

test('initializeTimes sets available times', async () => {
    fetchAPI.mockResolvedValue(["17:00", "18:00", "19:00", "20:00", "21:00"]);
  
    render(<Main />);
  
    await waitFor(() => {
      expect(fetchAPI).toHaveBeenCalledTimes(1);
    });
  
    expect(screen.getByText('17:00')).toBeInTheDocument();
    expect(screen.getByText('18:00')).toBeInTheDocument();
    expect(screen.getByText('19:00')).toBeInTheDocument();
    expect(screen.getByText('20:00')).toBeInTheDocument();
    expect(screen.getByText('21:00')).toBeInTheDocument();
  });

  test('updateTimes sets available times based on selected date', async () => {
    fetchAPI.mockResolvedValue(["10:00", "11:00", "12:00"]);
  
    render(<Main />);
  
    // Select a date in the BookingForm component
    userEvent.type(screen.getByLabelText('Choose date'), '2023-05-20');
  
    await waitFor(() => {
      expect(fetchAPI).toHaveBeenCalledTimes(1);
      expect(fetchAPI).toHaveBeenCalledWith('2023-05-20');
    });
  
    expect(screen.getByText('10:00')).toBeInTheDocument();
    expect(screen.getByText('11:00')).toBeInTheDocument();
    expect(screen.getByText('12:00')).toBeInTheDocument();
  });