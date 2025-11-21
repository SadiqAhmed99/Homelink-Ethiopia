'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { mockWorkers } from '@/lib/mock-data/workers';

interface Bed {
    id: string;
    roomNumber: string;
    bedNumber: number;
    status: 'Available' | 'Occupied' | 'Maintenance';
    occupant?: {
        workerId: string;
        workerName: string;
        checkInDate: string;
    };
}

interface CheckInOutLog {
    id: string;
    workerId: string;
    workerName: string;
    action: 'Check-in' | 'Check-out';
    bedId: string;
    roomNumber: string;
    bedNumber: number;
    timestamp: string;
}

export default function AccommodationCenterPage() {
    const [beds, setBeds] = useState<Bed[]>([
        { id: 'B001', roomNumber: 'R101', bedNumber: 1, status: 'Occupied', occupant: { workerId: 'W-0001', workerName: 'Abeba Tesfaye', checkInDate: '2025-11-15' } },
        { id: 'B002', roomNumber: 'R101', bedNumber: 2, status: 'Available' },
        { id: 'B003', roomNumber: 'R102', bedNumber: 1, status: 'Occupied', occupant: { workerId: 'W-0002', workerName: 'Almaz Bekele', checkInDate: '2025-11-18' } },
        { id: 'B004', roomNumber: 'R102', bedNumber: 2, status: 'Available' },
        { id: 'B005', roomNumber: 'R103', bedNumber: 1, status: 'Available' },
        { id: 'B006', roomNumber: 'R103', bedNumber: 2, status: 'Maintenance' },
        { id: 'B007', roomNumber: 'R104', bedNumber: 1, status: 'Occupied', occupant: { workerId: 'W-0003', workerName: 'Tigist Haile', checkInDate: '2025-11-20' } },
        { id: 'B008', roomNumber: 'R104', bedNumber: 2, status: 'Available' },
        { id: 'B009', roomNumber: 'R105', bedNumber: 1, status: 'Available' },
        { id: 'B010', roomNumber: 'R105', bedNumber: 2, status: 'Available' },
    ]);

    const [checkInOutLog, setCheckInOutLog] = useState<CheckInOutLog[]>([
        { id: 'L001', workerId: 'W-0001', workerName: 'Abeba Tesfaye', action: 'Check-in', bedId: 'B001', roomNumber: 'R101', bedNumber: 1, timestamp: '2025-11-15 10:30 AM' },
        { id: 'L002', workerId: 'W-0002', workerName: 'Almaz Bekele', action: 'Check-in', bedId: 'B003', roomNumber: 'R102', bedNumber: 1, timestamp: '2025-11-18 02:15 PM' },
        { id: 'L003', workerId: 'W-0003', workerName: 'Tigist Haile', action: 'Check-in', bedId: 'B007', roomNumber: 'R104', bedNumber: 1, timestamp: '2025-11-20 09:00 AM' },
    ]);

    const [showCheckInModal, setShowCheckInModal] = useState(false);
    const [selectedBed, setSelectedBed] = useState<Bed | null>(null);
    const [selectedWorker, setSelectedWorker] = useState('');

    const totalBeds = beds.length;
    const occupiedBeds = beds.filter(b => b.status === 'Occupied').length;
    const availableBeds = beds.filter(b => b.status === 'Available').length;
    const maintenanceBeds = beds.filter(b => b.status === 'Maintenance').length;

    const handleCheckIn = () => {
        if (!selectedBed || !selectedWorker) return;

        const worker = mockWorkers.find(w => w.id === selectedWorker);
        if (!worker) return;

        setBeds(beds.map(b =>
            b.id === selectedBed.id
                ? { ...b, status: 'Occupied' as const, occupant: { workerId: worker.id, workerName: worker.fullName, checkInDate: new Date().toISOString().split('T')[0] } }
                : b
        ));

        const newLog: CheckInOutLog = {
            id: `L${String(checkInOutLog.length + 1).padStart(3, '0')}`,
            workerId: worker.id,
            workerName: worker.fullName,
            action: 'Check-in',
            bedId: selectedBed.id,
            roomNumber: selectedBed.roomNumber,
            bedNumber: selectedBed.bedNumber,
            timestamp: new Date().toLocaleString(),
        };
        setCheckInOutLog([newLog, ...checkInOutLog]);

        setShowCheckInModal(false);
        setSelectedBed(null);
        setSelectedWorker('');
    };

    const handleCheckOut = (bed: Bed) => {
        if (!bed.occupant) return;

        setBeds(beds.map(b =>
            b.id === bed.id
                ? { ...b, status: 'Available' as const, occupant: undefined }
                : b
        ));

        const newLog: CheckInOutLog = {
            id: `L${String(checkInOutLog.length + 1).padStart(3, '0')}`,
            workerId: bed.occupant.workerId,
            workerName: bed.occupant.workerName,
            action: 'Check-out',
            bedId: bed.id,
            roomNumber: bed.roomNumber,
            bedNumber: bed.bedNumber,
            timestamp: new Date().toLocaleString(),
        };
        setCheckInOutLog([newLog, ...checkInOutLog]);
    };

    const groupedBeds = beds.reduce((acc, bed) => {
        if (!acc[bed.roomNumber]) acc[bed.roomNumber] = [];
        acc[bed.roomNumber].push(bed);
        return acc;
    }, {} as Record<string, Bed[]>);

    return (
        <div className="min-h-screen bg-[var(--color-bg-secondary)]">
            <header className="bg-[var(--color-neutral-charcoal)] text-white py-6 shadow-md">
                <div className="container-custom">
                    <h1 className="text-3xl font-bold">Accommodation Center</h1>
                    <p className="text-sm opacity-90 mt-1">Manage beds and track worker check-ins/check-outs</p>
                </div>
            </header>

            <div className="container-custom py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Card className="text-center">
                        <div className="text-4xl font-bold text-[var(--color-primary-ochre)] mb-2">{totalBeds}</div>
                        <p className="text-sm text-[var(--color-text-secondary)]">Total Beds</p>
                    </Card>
                    <Card className="text-center">
                        <div className="text-4xl font-bold text-[var(--color-error)] mb-2">{occupiedBeds}</div>
                        <p className="text-sm text-[var(--color-text-secondary)]">Occupied</p>
                    </Card>
                    <Card className="text-center">
                        <div className="text-4xl font-bold text-[var(--color-success)] mb-2">{availableBeds}</div>
                        <p className="text-sm text-[var(--color-text-secondary)]">Available</p>
                    </Card>
                    <Card className="text-center">
                        <div className="text-4xl font-bold text-[var(--color-warning)] mb-2">{maintenanceBeds}</div>
                        <p className="text-sm text-[var(--color-text-secondary)]\">Maintenance</p>
                    </Card>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <Card>
                            <h2 className="text-xl font-bold mb-4">Bed Management</h2>
                            {Object.entries(groupedBeds).map(([roomNumber, roomBeds]) => (
                                <div key={roomNumber} className="mb-6 last:mb-0">
                                    <h3 className="font-semibold mb-3 text-lg">Room {roomNumber}</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {roomBeds.map(bed => (
                                            <div key={bed.id} className={`p-4 rounded border-2 ${bed.status === 'Occupied' ? 'border-[var(--color-error)] bg-[var(--color-error-light)]' :
                                                    bed.status === 'Available' ? 'border-[var(--color-success)] bg-[var(--color-success-light)]' :
                                                        'border-[var(--color-warning)] bg-[var(--color-warning-light)]'
                                                }`}>
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="font-semibold">Bed {bed.bedNumber}</span>
                                                    <Badge variant={bed.status === 'Occupied' ? 'error' : bed.status === 'Available' ? 'success' : 'warning'}>
                                                        {bed.status}
                                                    </Badge>
                                                </div>
                                                {bed.occupant ? (
                                                    <div className="text-sm">
                                                        <p className="font-semibold">{bed.occupant.workerName}</p>
                                                        <p className="text-xs text-[var(--color-text-secondary)]">ID: {bed.occupant.workerId}</p>
                                                        <p className="text-xs text-[var(--color-text-secondary)]">Since: {bed.occupant.checkInDate}</p>
                                                        <Button variant="tertiary" size="small" fullWidth className="mt-3" onClick={() => handleCheckOut(bed)}>
                                                            Check Out
                                                        </Button>
                                                    </div>
                                                ) : bed.status === 'Available' ? (
                                                    <Button variant="secondary" size="small" fullWidth onClick={() => { setSelectedBed(bed); setShowCheckInModal(true); }}>
                                                        Assign Worker
                                                    </Button>
                                                ) : (
                                                    <p className="text-sm text-[var(--color-warning-dark)]">Under maintenance</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </Card>
                    </div>

                    <div>
                        <Card>
                            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                            <div className="space-y-3 max-h-[600px] overflow-y-auto">
                                {checkInOutLog.map(log => (
                                    <div key={log.id} className="p-3 bg-[var(--color-bg-secondary)] rounded">
                                        <div className="flex items-center justify-between mb-1">
                                            <Badge variant={log.action === 'Check-in' ? 'success' : 'warning'}>{log.action}</Badge>
                                            <span className="text-xs text-[var(--color-text-secondary)]">{log.timestamp}</span>
                                        </div>
                                        <p className="font-semibold text-sm">{log.workerName}</p>
                                        <p className="text-xs text-[var(--color-text-secondary)]">{log.roomNumber} - Bed {log.bedNumber}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

            {showCheckInModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <Card className="max-w-md w-full mx-4">
                        <h3 className="text-xl font-bold mb-4">Assign Worker to Bed</h3>
                        <div className="mb-4">
                            <p className="text-sm text-[var(--color-text-secondary)] mb-2">
                                Room: {selectedBed?.roomNumber} - Bed {selectedBed?.bedNumber}
                            </p>
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-semibold mb-2">Select Worker</label>
                            <select value={selectedWorker} onChange={(e) => setSelectedWorker(e.target.value)}
                                className="w-full px-4 py-2 border border-[var(--color-border-light)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary-teal)]">
                                <option value="">-- Select Worker --</option>
                                {mockWorkers.slice(0, 20).map(worker => (
                                    <option key={worker.id} value={worker.id}>{worker.fullName} ({worker.id})</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="secondary" fullWidth onClick={handleCheckIn} disabled={!selectedWorker}>Check In</Button>
                            <Button variant="ghost" fullWidth onClick={() => { setShowCheckInModal(false); setSelectedBed(null); setSelectedWorker(''); }}>Cancel</Button>
                        </div>
                    </Card>
                </div>
            )}
        </div>
    );
}
