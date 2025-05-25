import { useEffect, useState } from 'react'
import exampleData from '../../example-json/races.json'
import { type Race } from '../../types/races'

import './index.css'

function Archive() {
  const [races, setRaces] = useState<Race[]>();
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    // Placeholder for fetching data from API
    // ---
    let data = exampleData;
    // ---

    setRaces(data.races);
  }, []);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortedRaces = () => {
    if (!races || !sortField) return races;

    return [...races].sort((a, b) => {
      let valueA, valueB;
      
      if (sortField === 'eventName') {
        valueA = a.eventName;
        valueB = b.eventName;
      } else if (sortField === 'date') {
        valueA = a.time;
        valueB = b.time;
      } else if (sortField === 'track') {
        valueA = a.track;
        valueB = b.track;
      } else if (sortField === 'winner') {
        const winnerA = [...a.results].sort((x, y) => x.place - y.place)[0];
        const winnerB = [...b.results].sort((x, y) => x.place - y.place)[0];
        valueA = winnerA.name;
        valueB = winnerB.name;
      } else if (sortField === 'college') {
        const winnerA = [...a.results].sort((x, y) => x.place - y.place)[0];
        const winnerB = [...b.results].sort((x, y) => x.place - y.place)[0];
        valueA = winnerA.college;
        valueB = winnerB.college;
      } else {
        return 0;
      }

      const comparison = valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  };

  const sortedRaces = getSortedRaces();

  return (
    <>
      <div>
        <div className="archive-header">
          <h1>Race Archive</h1>
          <p>See and filter the results from past races</p>
        </div>
        <div className="archive-search">
          <p>Filters:</p>
        </div>
        <div className="archive-table">
          <div className="archive-table-header">
            <span onClick={() => handleSort('eventName')} className="sortable-header">
              Event {sortField === 'eventName' && (sortDirection === 'asc' ? '↑' : '↓')}
            </span>
            <span onClick={() => handleSort('date')} className="sortable-header">
              Date {sortField === 'date' && (sortDirection === 'asc' ? '↑' : '↓')}
            </span>
            <span onClick={() => handleSort('date')} className="sortable-header">
              Time {sortField === 'date' && (sortDirection === 'asc' ? '↑' : '↓')}
            </span>
            <span onClick={() => handleSort('track')} className="sortable-header">
              Track {sortField === 'track' && (sortDirection === 'asc' ? '↑' : '↓')}
            </span>
            <span onClick={() => handleSort('winner')} className="sortable-header">
              Winner {sortField === 'winner' && (sortDirection === 'asc' ? '↑' : '↓')}
            </span>
            <span onClick={() => handleSort('college')} className="sortable-header">
              College {sortField === 'college' && (sortDirection === 'asc' ? '↑' : '↓')}
            </span>
          </div>

          {sortedRaces && sortedRaces.map((race) => {
            let sorted = [...race.results];
            let winner = sorted.sort((a, b) => a.place - b.place)[0];
            let isExpanded = race.id === expandedId;

            return (
              <div key={race.id}>
                <div className="archive-table-body" onClick={() => setExpandedId(isExpanded ? null : race.id)}>
                  <span>{race.eventName}</span>
                  <span>{race.time.substring(0, 10)}</span>
                  <span>{race.time.substring(11, 16)}</span>
                  <span>{race.track}</span>
                  <span>{winner.name}</span>
                  <span>{winner.college}</span>
                </div>

                {isExpanded && (
                  <div className="archive-table-expanded">
                    <div className="expanded-rows-container">
                      {sorted && sorted.map((result) => (
                        <div className="expanded-row">
                          <span style={{ flex: 0.5 }}>{result.place}{result.place == 1 ? "st" : result.place == 2 ? "nd" : result.place == 3 ? "rd" : "th"}</span>
                          <span style={{ flex: 3 }}>{result.name}</span>
                          <span style={{ flex: 3 }}>{result.college}</span>
                          <span style={{ flex: 2 }}>{result.lap1}</span>
                          <span style={{ flex: 2 }}>{result.lap2}</span>
                          <span style={{ flex: 2 }}>{result.lap3}</span>
                          <span style={{ flex: 0.75 }}>{result.points}{result.points > 1 ? "pts" : "pt"}</span>
                        </div>
                      ))}
                    </div>
                    <div className="expanded-image">
                      <div>
                        <img src="/assets/example-result/map.png"/>
                      </div>
                      <div>
                        <img src="/assets/example-result/picture.webp"/>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Archive