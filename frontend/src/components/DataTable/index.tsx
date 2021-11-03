const  DataTable = () =>{
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/10/2021</td>
                        <td>Barry Allen</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr>

                    <tr>
                        <td>29/09/2021</td>
                        <td>Anakin</td>
                        <td>25</td>
                        <td>24</td>
                        <td>449138.00</td>
                    </tr>
                    <tr>
                        <td>01/11/2021</td>
                        <td>Kal-El</td>
                        <td>75</td>
                        <td>19</td>
                        <td>466867.00</td>
                    </tr>
                    <tr>
                        <td>26/06/2021</td>
                        <td>Logan</td>
                        <td>50</td>
                        <td>50</td>
                        <td>292426.00</td>
                    </tr>
                    <tr>
                        <td>30/05/2021</td>
                        <td>Padmé</td>
                        <td>31</td>
                        <td>26</td>
                        <td>450088.00</td>
                    </tr>
                                        
                </tbody>
            </table>
        </div>

    );
  }
  
  export default DataTable;
  