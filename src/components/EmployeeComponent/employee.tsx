'use client'
import { useEffect, useState } from 'react';
import supabase from '../../../utils/supabase';

interface Employee {
    id: number;
    Name: string;
    salary: number;
    joined: string;
}

export default function Employee() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchEmployees() {
            try {
                const { data, error } = await supabase.from('Lens').select('*');
                if (error) {
                    throw error;
                }
                // Ensure that data is not null before setting the state
                if (data) {
                    setEmployees(data);
                }
            } catch (error) {
                console.error('Error fetching employees:', error);
                setError(error instanceof Error ? error.message : 'An unknown error occurred');
            }
        }
        fetchEmployees();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div className='overflow-auto py-10'>
                <h2 className='text-3xl mb-8 font-poppins tru-animations text-center  '>Employee List</h2>
                <table style={{ minWidth: '100%' }} className=''>
                    <thead>
                        <tr className='font-raleway text-primary'>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Joined</th>
                        </tr>
                    </thead>
                    <tbody className='font-poppins text-secondary mt-3 '>
                        {employees.map(employee => (
                            <tr key={employee.id} className=''>
                                <td className='text-center'>{employee.Name}</td>
                                <td className='text-center'>{employee.salary}</td>
                                <td className='text-center'>{employee.joined}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    );
}
