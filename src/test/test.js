import '@testing-library/jest-dom'; //Runner
import { render, screen, fireEvent } from '@testing-library/react'; //Testing Library
import App from '../App';

describe('testing text', () => {
  test('untuk cek tulisan hello', () => {
    render(<App />); //untuk render/load react application
    const txt = screen.getByText('Helloo'); //select komponen yg ada text Helloo
    // screen.debug() //untuk menampilkan dom di terminal
    //const txt2 = screen.getByText(/helloo/i) //Default CRA
    expect(txt).toBeInTheDocument();
  });

  test('cek tulisan learn react testing', () => {
    render(<App />);
    const txt = screen.getByText(/learn react testing/i);
    expect(txt).toBeInTheDocument();
  });
});

describe('test first render tombol belum di klik', () => {
  test('cek element hide show ketika render pertama kali', () => {
    render(<App />);
    const txt = screen.getByText(/Tulisan ini akan Sembunyi/i);
    expect(txt).toBeInTheDocument();
  });
  test('tulisan di tombol ketika render pertama kali', () => {
    render(<App />);
    const txt = screen.getByText(/munculkan/i);
    expect(txt).toBeInTheDocument();
  });
});

describe('test ketika tombol di klik', () => {
  test('cek tulisan ketika sudah di klik', () => {
    render(<App />);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    const txt = screen.getByText(/Tulisan ini akan muncul/i);
    expect(txt).toBeInTheDocument();
  });
  test('debug', () => {
    render(<App />);
    // screen.debug()
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    // screen.debug()
    const txt = screen.getByText(/Tulisan ini akan muncul/i);
    expect(txt).toBeInTheDocument();
  });
});

describe('cek user if exists', () => {
  test('user existence', () => {
    render(<App />);
    //const txt = screen.getByText('Selamat datang, Rudi') //error
    const txt = screen.queryByText('Selamat datang, Rudi');
    expect(txt).toBeNull();
  });
  test('user success login', async () => {
    render(<App />);
    const txt = await screen.findByText('Selamat datang, Rudi');
    expect(txt).toBeInTheDocument();
  });
});
